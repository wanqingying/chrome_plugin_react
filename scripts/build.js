const fs=require('fs')
const {exec,execSync}=require('child_process')
const path=require('path')

function moveBuild(){
    const dir=path.join(__dirname,'../');
    execSync(`chmod -R 777 ${dir}/build`)
    execSync(`rm -rf ${dir}/plugin/popup`)
    execSync(`mkdir ${dir}/plugin/popup`)
    execSync(`mv ${dir}/build/* ${dir}/plugin/popup`)
    execSync(`chmod -R 777 ${dir}/plugin`)
}

moveBuild()