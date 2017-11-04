SELECT myTable.event_type,
(b.value - myTable.value) AS value
FROM (SELECT *
      FROM   events 
      GROUP BY event_type, time, value
      ORDER BY time ASC
      LIMIT 2 OFFSET 1) AS myTable , 
 (SELECT *
      FROM   events 
      GROUP BY event_type, time, value
      ORDER BY time DESC
      LIMIT 2 OFFSET 0) AS b 
WHERE myTable.event_type IN ( SELECT e.event_type
                        FROM events e
                        GROUP BY e.event_type
                        HAVING COUNT(e.event_type) >= 2 )
AND myTable.event_type = b.event_type
ORDER BY myTable.event_type ASC