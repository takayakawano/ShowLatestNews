# ShowLatestNews
This solution is showing the latest news of cutomer in a form of CRM using by Bing News API.

# Overview
In the call center scenario, understanding the customer's situation beforehand when the call center agent handles the customer greatly leads to customer satisfaction. Also, when a salesperson makes customer visits, knowing the latest information of customers in advance may become a catalyst to greatly advance the proposal activities.

In this sample, when an agent or salesperson opens a support case or an opportunity case, it displays the latest news of the customer based on the customer name. This will contribute to improving the customer satisfaction level of the agent and the sales order accuracy of salespeople.

# How to work?
1. Open a Case form.
2. Click the [Latest News] Tab.
3. Auto showing the latest news of cutomer in Bing.
4. Click open easch news with another session tab.
https://msdnshared.blob.core.windows.net/media/2017/10/image1189.png

I tested with Microsoft Dynamics 365 Online July 2017 Update (9.0.0) with Bing News API.

# How to implement?
## 1. Enable Bing News API.
1. Login to Azure.
2. Search [Bing Search v7 APIs] in search the market place.
3. Create [Bing Search v7 APIs].
4. Copy subscription keys.

## 2. Setting the ShowLatestNews solution file to Dynamics 365.
1. Open solution menu.
2. Import the ShowLatestNews solution file.
3. Open the ShowLatestNews solution record.
4. Open [new_/ShowLatestNews.js] file.
5. Past the subscription key of Bing Search API.
6. Save this file.
7. Open Case form Editor.
8. Insert [new_/ShowLatestNews.html] Web Resource to the Case form.
9. Publish All customizations
 
