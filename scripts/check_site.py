from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
SKIP_SCHEMES = {"data", "http", "https", "javascript", "mailto", "tel"}


class ReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.references: list[tuple[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        for name, value in attrs:
            if value and name in {"href", "src"}:
                self.references.append((name, value))


def resolve_reference(page: Path, value: str) -> Path | None:
    if value.startswith("//") or "{{" in value:
        return None
    parsed = urlsplit(value)
    if parsed.scheme.lower() in SKIP_SCHEMES or not parsed.path:
        return None
    path = Path(unquote(parsed.path.lstrip("/")))
    target = ROOT / path if parsed.path.startswith("/") else page.parent / path
    if parsed.path.endswith("/") or target.is_dir():
        target /= "index.html"
    return target


def main() -> int:
    errors: list[str] = []
    pages = sorted(ROOT.rglob("*.html"))
    for page in pages:
        parser = ReferenceParser()
        try:
            parser.feed(page.read_text(encoding="utf-8"))
            parser.close()
        except (OSError, UnicodeError) as error:
            errors.append(f"{page.relative_to(ROOT)}: cannot parse: {error}")
            continue
        for attribute, value in parser.references:
            target = resolve_reference(page, value)
            if target is not None and not target.exists():
                errors.append(
                    f"{page.relative_to(ROOT)}: missing {attribute}={value!r} "
                    f"({target.relative_to(ROOT)})"
                )

    if errors:
        print("Static-site validation failed:")
        for error in errors:
            print(f"  - {error}")
        return 1

    print(f"Validated {len(pages)} HTML files and their local links/assets.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
