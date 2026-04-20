@echo off
cd /d "C:\Users\Gonçalo\OneDrive\Viatel Viseu\Dashboard Resultados Mensais\site"

echo.
echo  ============================================
echo   VIATEL VISEU - Publicar Dashboard
echo  ============================================
echo.

:: Obter data actual
for /f "tokens=1-3 delims=/" %%a in ("%date%") do (
    set DIA=%%a
    set MES=%%b
    set ANO=%%c
)

set MENSAGEM=Actualizacao %DIA%/%MES%/%ANO%

echo  A publicar dashboards...
echo.

git add .
git commit -m "%MENSAGEM%"
git push

echo.
echo  ============================================
echo   Site actualizado com sucesso!
echo   https://goncaloribeiro11.github.io/resultados-viatel/
echo  ============================================
echo.
pause
