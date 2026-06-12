@echo off
cd /d "%~dp0"
echo Running git push...
git push
echo.
echo Exit code: %ERRORLEVEL%
pause
