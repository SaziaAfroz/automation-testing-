@echo off

REM Array of suites
set "suites=combinedSuite upload"

REM Loop through the array and run nmp commands 
for %%s in (%suites%) do (
    call npm run %%s 

)

call npm run publish