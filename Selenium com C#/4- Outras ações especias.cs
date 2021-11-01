Performando ações de usuário:

-Passar o mouse sobre um elemento:
Actions action  = new Actions(driver);
action.MoveToElement(element).Build().Perform();

-Arrastar e soltar:
static  void MoveElement(Actions actions IWebElement from, IWebElement to, int x = 0, int y = 0) actions.ClickAndHold(from).MoveToElement(to).MovenyOffset(x, y).Release().Build().Perform(); 
                              
                              Elementos From e To estariam previamente declarados!
                              
 --> Mudar o tamanho da janela: 
 	Size size = new Size ();
 	ize.Width = 1920;
 	size.Height = 1080;
 	
 	driver.manage().Window.Size = size; 
 	
  --> Maximizando:
  	driver.manage().Window.Maximize();
  	
  --> Abrindo uma nova guia:
      IWebDriver driver = new InternetExplorerDriver();
    driver.Navigate().GoToUrl("http://google.com");
    Actions actions = new Actions(driver);
    actions.KeyDown(Keys.Control).SendKeys("t").Build().Perform(); 
