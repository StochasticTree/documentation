#!/bin/sh
# Generate CHANGELOG.md for the website from the canonical NEWS.md in the
# stochtree repo, converting R-style dev version suffixes (.9000) to -dev.
sed 's/\.9000/-dev/g' stochtree_repo/NEWS.md > stochtree_repo/CHANGELOG.md
