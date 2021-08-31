export CWD=$(pwd)

function doVars {
  source ${CWD}/infrastructure/scripts/vars.sh
}

cd ${CWD}/infrastructure

pulumi destroy 