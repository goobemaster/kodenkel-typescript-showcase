rem 1 - Building application.js

del ".\dist\application.js"

call npm install
call npx gulp

rem 2 - Copying dependencies to dist

if not exist ".\dist\assets\js" mkdir ".\dist\assets\js"

If not exist ".\dist\assets\js\system.min.js" copy ".\node_modules\systemjs\dist\system.min.js" ".\dist\assets\js\system.min.js"
If not exist ".\dist\assets\js\named-register.min.js" copy ".\node_modules\systemjs\dist\extras\named-register.min.js" ".\dist\assets\js\named-register.min.js"
If not exist ".\dist\assets\js\amd.min.js" copy ".\node_modules\systemjs\dist\extras\amd.min.js" ".\dist\assets\js\amd.min.js"

rem ... Additional dependencies ...