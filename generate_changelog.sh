#!/bin/sh
# Generate CHANGELOG.md for the website from the canonical NEWS.md in the
# stochtree repo, converting R-style dev version suffixes (.9000) to -dev.
# Some pre-packaged branches may not ship NEWS.md; emit a placeholder so the
# changelog page still renders. Ensure the target directory exists first so a
# bare render (no stochtree_repo checkout) still produces the include target.
mkdir -p stochtree_repo
if [ -f stochtree_repo/NEWS.md ]; then
  sed 's/\.9000/-dev/g' stochtree_repo/NEWS.md > stochtree_repo/CHANGELOG.md
else
  echo "No NEWS.md found in stochtree_repo; writing placeholder CHANGELOG.md" >&2
  printf '# Changelog\n\n_No changelog available for this build._\n' > stochtree_repo/CHANGELOG.md
fi
