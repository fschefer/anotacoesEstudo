--> Caixa de texto:
    
    static IWebDriver driver = new ChromeDriver();
    static IWebElement textBox;

    static void Main()
    {
        string url = "http://testing.todorvachev.com/special-elements/text-input-field/";
        
        driver.Navigate().GoToUrl(url);

        textBox = driver.FindElement(By.Name("username"));

        textBox.SendKeys("Test text"); <- Digitando na caixa de texto
        
        Thread.Sleep (4000); <- Espera 4 segundos para fechar 
        
        textBox.Clear(); <-Limpa a caixa de texto
        Console.WriteLine(textBox.GetAttribute("value")); <- Extraí o texto e escreve no console
        
        --> Checkbox:
                string option = "2";
        driver.Navigate().GoToUrl(url);

	//Muitas vezes, a única diferença entre checkboxes é a option	
	
        element = driver.FindElement(By.XPath("//*[@id=\"post-33\"]/div/p[7]/input[" + option + "]"));
        element.Click();
        
        --> Botões radiais:
        radioButton = driver.FindElement(By.CssSelector("#post-10 > div > form > p:nth-child(6) > input[type =\"radio\"]:nth-child(" + option + ")"));Screenshot ss = ((ITakesScreenshot)driver).GetScreenshot();
        ss.SaveAsFile("C://Image.png", 
        ScreenshotImageFormat.Png);

        
     --> Menu seletor:
     static IWebElement dropDownMenu;
    static IWebElement elementFromTheDropDownMenu;
    
        string dropDownMenuElements = "#post-6 > div > p:nth-child(6) > select > option:nth-child(3)";

        driver.Navigate().GoToUrl(url);

        dropDownMenu = driver.FindElement(By.Name("DropDownTest"));
        elementFromTheDropDownMenu = driver.FindElement(By.CssSelector(dropDownMenuElements));
        elementFromTheDropDownMenu.Click();
        
        --> Alertas:
            static IAlert alert;
            alert = driver.SwitchTo().Alert();
        alert.Accept();
        
        --> Tirando uma screenshoot:
        Screenshot ss = ((ITakesScreenshot)driver).GetScreenshot();
        ss.SaveAsFile("C://Image.png", 
        ScreenshotImageFormat.Png);

        
