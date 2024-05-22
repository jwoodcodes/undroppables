library(mongolite)

connection_string = 'mongodb+srv://FFCoder:Hesstrucksarethebest!@undroppables.unq112p.mongodb.net/undroppables'
data = mongo(collection="allPlayerData", db="projectionsBuilder", url=connection_string)
data
data$count()
str(data)
data$iterate()$one()
head(data$iterate()$one())
