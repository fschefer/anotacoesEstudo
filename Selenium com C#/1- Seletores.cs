Dependências básicas:

using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.Threading;
using System.Drawing;
using System.Collections.ObjectModel;
using System.Linq;

--> Método para achar elemento pelo seletor "name":

class EntryPoint
{
    static void Main()
    {
        IWebDriver driver = new ChromeDriver();

        driver.Navigate().GoToUrl("http://testing.todorvachev.com/selectors/name/");

        IWebElement element = driver.FindElement(By.Name("myName"));
        
 --> Achando pelo seletor "classname":
         IWebElement element = driver.FindElement(By.ClassName(className));
         
--> Seletor "id": 
class EntryPoint
{
    static void Main()
    {
        string url = "http://testing.todorvachev.com/selectors/id/";
        string ID = "testImage";
        
        IWebDriver driver = new ChromeDriver();

        driver.Navigate().GoToUrl(url);

        IWebElement element = driver.FindElement(By.Id(ID));
}
}

--> CSS-Selector e xPath são obtidos clicando com o botão direito no elemento, dentro do console:
string url = "http://testing.todorvachev.com/selectors/css-path/";
        string cssPath = "#post-108 > div > figure > img";
        string xPath = "//*[@id=\"post-108\"]/div/figure/img";

        IWebDriver driver = new ChromeDriver();

        driver.Navigate().GoToUrl(url);

        IWebElement cssPathElement = driver.FindElement(By.CssSelector(cssPath));
        IWebElement xPathElement = driver.FindElement(By.XPath(xPath)); 
        
                               Deve-se dar preferência ao uso de CSS!
                               

