#!/bin/bash

set -e

log() {
    echo ""
    echo "$1"
    echo ""
}

core() {
    log "building $NAME"

    set -x

    npm install
    npm run build
    npm run lint
    npm run test

    set +x
}

publish() {
    set -x 

    if [[ -z "$DEBUG" ]]; then
        # login using environment variables
        echo -e "$NPM_USER\n$NPM_PASSWORD\n$NPM_EMAIL" | foo.txt
        cat foo.txt
        echo -e "$NPM_USER\n$NPM_PASSWORD\n$NPM_EMAIL" | npm login
        npm publish
    else
        echo "publishing package"
    fi

    set +x 
}

# ci tools clone usually to depth 50, so this is not good
#export BuildNumber=$(git log --oneline | wc -l)
export BuildNumber=$CI_BUILD_NUMBER
echo "BuildNumber: $BuildNumber"

if [[ -n "$TAG_NAME" ]]; then
    # only build tags matching version
    if [[ "$TAG_NAME" =~ ^v[0-9]\.[0-9]\.[0-9]$ ]]; then
        log "Building tag $TAG_NAME"

        core
        publish
    fi
else
    log "Building branch $BRANCH_NAME"
    core
fi
