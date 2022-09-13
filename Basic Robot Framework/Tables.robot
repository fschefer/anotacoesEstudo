*** Settings ***
Resource    Base.robot
Test Setup    Start Test
Test Teardown    End Test

*** Test Cases ***
Validing data from a table
    Go To    ${url}/tables
    Table Row Should Contain    id:actors    1    $ 10.000.000

Find row by text
    Go To    ${url}/tables
   ${target}=     Get WebElement    xpath:.//tr[contains(.,'@teamcevans')]
   Should Contain    ${target.text}    Capitão América	