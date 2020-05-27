/*Top 10 “stops” by weight over the past 12 months*/

SELECT name, SUM(amount_delivered) AS total_delivered
FROM stop
LEFT JOIN delivery 
    ON id = stopId
WHERE DATEDIFF(MM, time_of_delivery, GETDATE()) < 6
GROUP BY id
ORDER BY SUM(amount_delivered) DESC
LIMIT 10


/*Average weight per delivery, listed by “stop” for each month*/

SELECT MONTH(time_of_delivery) AS month, name, AVG(amount_delivered) AS average_delivery, 
FROM stop
LEFT JOIN delivery 
    ON id = stopId
GROUP BY id, MONTH(time_of_delivery)