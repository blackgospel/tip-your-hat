export CWD=$(pwd)

function doVars {
    source ${CWD}/infrastructure/scripts/vars.sh
}

function buildApp {
    cd ${ADMIN_FRONTEND_DIR}
    yarn build
    cd ${CWD}
}

function buildBackend {
    cd ${BACKEND_DIR}
    yarn build
    cd ${CWD}
}

function deployApp {
    cd ${INFRASTRUCTURE_DIR}
    pulumi up --non-interactive --yes
}

doVars
buildApp
buildBackend
deployApp