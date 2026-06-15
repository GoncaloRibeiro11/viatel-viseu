@echo off
cd /d "%~dp0"
git add digital.html
git commit -m "Fix: PDF imprime so equipa selecionada; botao voltar dashboard"
git push
echo.
echo Exit: %ERRORLEVEL%
pause
