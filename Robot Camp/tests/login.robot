*** Settings ***
Library    Browser
Documentation    User should login to the admin page

*** Test Cases ***
Admin login
        New Browser    headless=false     browser=chromium
        New Page    http://localhost:3000
        Fill Text    css=input[name=email]        admin@smartbit.com
        Fill Text    css=input[name=password]     qacademy
        Click        xpath=//button[text()="Entrar no sistema"]
        Get Text    css= aside strong    equal     Admin

Invalid e-mail
        New Browser    headless=false     browser=chromium
        New Page    http://localhost:3000
        Fill Text    css=input[name=email]        404@smartbit.com
        Fill Text    css=input[name=password]     qacademy
        Click        xpath=//button[text()="Entrar no sistema"]
        Wait For Elements State    css=.Toastify__toast-body >> text=Suas credenciais são inválidas, por favor tente novamente!    visible    5

Invalid password
     New Browser    headless=false     browser=chromium
        New Page    http://localhost:3000
        Fill Text    css=input[name=email]        admin@smartbit.com
        Fill Text    css=input[name=password]     wrongpass123
        Click        xpath=//button[text()="Entrar no sistema"]
        Wait For Elements State    css=.Toastify__toast-body >> text=Suas credenciais são inválidas, por favor tente novamente!    visible    5
