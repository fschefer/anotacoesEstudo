*** Settings ***
Library    Browser

*** Keywords ***
Fill Credentials
            [Arguments]    ${email}    ${password}
            
            Fill Text        css=input[name=email]        ${email}
            Fill Text        css=input[name=password]     ${password}


Submit Credentials
            Click        xpath=//button[text()="Entrar no sistema"]



Validate toaster
            Wait For Elements State    css=.Toastify__toast-body >> text=Suas credenciais são inválidas, por favor tente novamente!    visible    5
Open page    
    New Browser    headless=false     browser=chromium
        New Page    http://localhost:3000
    