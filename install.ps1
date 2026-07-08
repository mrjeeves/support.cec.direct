# support.cec.direct/install.ps1 — short URL for the canonical CEC Support
# installer, which lives in the app repository and is maintained there:
#
#   https://github.com/mrjeeves/CECSupport/blob/main/scripts/install.ps1
#
# This stub only fetches that script and runs it, forwarding parameters
# (-Service, -NoService, -DryRun, ...), so the site can never drift from
# what the app actually ships.
#
#   irm https://support.cec.direct/install.ps1 | iex
#   & ([scriptblock]::Create((irm https://support.cec.direct/install.ps1))) -Service

$ErrorActionPreference = "Stop"
$canonical = "https://raw.githubusercontent.com/mrjeeves/CECSupport/main/scripts/install.ps1"
$script = Invoke-RestMethod -Uri $canonical -Headers @{ "User-Agent" = "cec-support-install" }
& ([scriptblock]::Create($script)) @args
