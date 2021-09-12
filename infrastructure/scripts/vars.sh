export NODE_ENV=test

export AWS_ACCESS_KEY_ID=AKIA3TA2JVTYS473XJUR
export AWS_SECRET_ACCESS_KEY=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

export PROJECT_NAME=$(cat $CWD/package.json | jq -r '.name')

export ADMIN_FRONTEND_DIR=${CWD}/frontend/admin
export ADMIN_FRONTEND_BUILD_DIR=${ADMIN_FRONTEND_DIR}/build

export BACKEND_DIR=${CWD}/backend
export BACKEND_BUILD_DIR=${BACKEND_DIR}/build

export INFRASTRUCTURE_DIR=${CWD}/infrastructure
export INFRASTRUCTURE_BUILD_DIR=${BACKEND_DIR}/build