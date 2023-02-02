Feature: Validate the Rahul Shetty Page

Scenario: Validate the whole page
Given Visit the ecommerce site for vegitables
When Type "po" in search and get "Potato"
And Proceed to checkout
Then select country and click on Proceed
And verify "Thank you" message 

   