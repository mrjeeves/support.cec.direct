# support.cec.direct — one-command operations for the static GitHub Pages site.
set shell := ["bash", "-cu"]
set windows-shell := ["powershell.exe", "-NoLogo", "-NoProfile", "-ExecutionPolicy", "Bypass", "-Command"]

default: help

help:
    @just --list

[doc("Serve the site locally (default: http://localhost:8000).")]
dev PORT="8000":
    @python -m http.server {{PORT}}

[doc("Validate every HTML file and local link/asset before Pages deploys it.")]
check:
    @python scripts/check_site.py

# GitHub Pages deploys the source tree directly, so validation is the build.
[doc("Validate the deployable static site.")]
build: check

[unix]
[doc("Discard local changes + pull + fetch all; falls back to the default branch when yours is gone on origin.")]
pull:
    #!/usr/bin/env bash
    set -euo pipefail
    git reset --hard HEAD
    git fetch --all --prune
    branch=$(git rev-parse --abbrev-ref HEAD)
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        default=$(git symbolic-ref --quiet --short refs/remotes/origin/HEAD | sed 's|^origin/||' || true)
        default=${default:-main}
        echo "→ origin no longer has '$branch' (merged & deleted?) — switching to '$default'"
        git checkout "$default"
    fi
    git pull

[windows]
[doc("Discard local changes + pull + fetch all; falls back to the default branch when yours is gone on origin.")]
pull:
    @$branch = git rev-parse --abbrev-ref HEAD; git reset --hard HEAD; git fetch --all --prune; git show-ref --verify --quiet "refs/remotes/origin/$branch"; if ($LASTEXITCODE -ne 0) { $default = git symbolic-ref --quiet --short refs/remotes/origin/HEAD; if ($default) { $default = $default -replace '^origin/','' } else { $default = 'main' }; Write-Host "origin no longer has '$branch' (merged & deleted?) - switching to '$default'"; git checkout $default }; git pull

[doc("just pull (clean + fetch all), then git checkout (e.g. `just checkout main`).")]
checkout *args: pull
    @git checkout {{args}}
