*** Settings ***
Library        SeleniumLibrary


*** Variables ***
${url}   https://training-wheels-protocol.herokuapp.com


*** Keywords ***
Start Test
        Open Browser    ${url}    chrome

End Test 
        Capture Page Screenshot
        Close Browser
