*** Settings ***
Library    Browser

*** Keywords ***
Validate toaster
    [Arguments]    ${expected_message}
    Wait For Elements State    css=.Toastify__toast-body >> text=${expected_message}    visible    5