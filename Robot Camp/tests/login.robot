*** Settings ***
Documentation       User should login to the admin page
Resource    ../resources/base.resource

*** Test Cases ***
Admin login
    Open page
    Fill Credentials    admin@smartbit.com    qacademy
    Submit Credentials
    Validate the user is logged in    Admin

Invalid e-mail
    Open page
    Fill Credentials    404@qaninja.com    admin
    Submit Credentials
    Validate toaster    Suas credenciais são inválidas, por favor tente novamente!
    Validate browser message

Invalid password
    Open page
    Fill Credentials    admin@smartbit.com    wrongpass
    Submit Credentials
    Validate toaster    Suas credenciais são inválidas, por favor tente novamente

Blank e-mail
    Open page
    Fill Credentials    ${EMPTY}    qacademy
    Submit Credentials
    Validate alert    email    O e-mail é obrigatório

Blank password
    Open page
    Fill Credentials    admin@smartbit.com    ${EMPTY}
    Submit Credentials
    Validate alert    password    A senha é obrigatória

Fill nothing
    Open page
    Submit Credentials
    Validate alert    email    O e-mail é obrigatório
    Validate alert    password    A senha é obrigatória

