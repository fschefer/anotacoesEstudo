try
        {
            cssPathElement = driver.FindElement(By.CssSelector(cssPath));

            if (cssPathElement.Displayed)
            {
                GreenMessage("I can see the CSS Path Element!");
            }

        }
        catch (NoSuchElementException)
        {
            RedMessage("I can't see the CSS Path Element!");
