export NODE_ENV=test

export PROJECT_NAME=$(cat $CWD/package.json | jq -r '.name')

export ADMIN_FRONTEND_DIR=${CWD}/frontend/admin
export ADMIN_FRONTEND_BUILD_DIR=${ADMIN_FRONTEND_DIR}/build

export BACKEND_DIR=${CWD}/backend
export BACKEND_BUILD_DIR=${BACKEND_DIR}/build

export INFRASTRUCTURE_DIR=${CWD}/infrastructure
export INFRASTRUCTURE_BUILD_DIR=${BACKEND_DIR}/build
