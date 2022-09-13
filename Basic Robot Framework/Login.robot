*** Settings ***
Resource    Base.robot
Test Setup    Start Test
Test Teardown    End Test

*** Test Cases ***
Automating a login form    
    Go To    ${url}/login
    Input Text    css: input[name=username]    stark
    Input Password    css: input[name=password]    jarvis!
    Click Element    class:btn-login
    Page Should Contain     Olá, Tony Stark. Você acessou a área logada!

Invalid password
    Go To    ${url}/login
    Input Text    css: input[name=username]    stark
    Input Password    css: input[name=password]    abc123
    Click Element    class:btn-login
    Page Should Contain     Senha é invalida!

Invalid username
    Go To    ${url}/login
    Input Text    css: input[name=username]    test
    Input Password    css: input[name=password]    jarvis!
    Click Element    class:btn-login
    Page Should Contain      O usuário informado não está cadastrado!
