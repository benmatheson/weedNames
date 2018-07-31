#source:https://www.commerce.alaska.gov/web/Portals/9/pub/MCB/MJRenewals/LicensesRenewal2018.pdf

library(tidyverse, jsonlite)
library(jsonlite)
library(stringr)
setwd("projects/weed/data")
getwd();
weedRaw <- read_csv("weed_raw.csv")


gc16LargeUS <- gc16LargeUS %>% mutate(vendor_name =ifelse(str_detect(vendor_name, "BOEING"), "BOEING CORPORATION", vendor_name)) 


weed <- weedRaw
weed <- weed %>% mutate(bud = ifelse(str_detect(Dba, "BUD"), TRUE, FALSE))
weed <- weed %>% mutate(kush = ifelse(str_detect(Dba, "KUSH"), TRUE, FALSE))
weed <- weed %>% mutate(green = ifelse(str_detect(Dba, "GREEN"), TRUE, FALSE))
weed <- weed %>% mutate(herb = ifelse(str_detect(Dba, "HERB"), TRUE, FALSE))
weed <- weed %>% mutate(fireweed= ifelse(str_detect(Dba, "FIREWEED"), TRUE, FALSE))
weed <- weed %>% mutate(dank= ifelse(str_detect(Dba, "DANK"), TRUE, FALSE))
weed <- weed %>% mutate(high= ifelse(str_detect(Dba, "HIGH"), TRUE, FALSE))
weed <- weed %>% mutate(frost= ifelse(str_detect(Dba, "FROST"), TRUE, FALSE))
weed <- weed %>% mutate(frontier= ifelse(str_detect(Dba, "FRONTIER"), TRUE, FALSE))
weed <- weed %>% mutate(alaska= ifelse(str_detect(Dba, "ALASKA"), TRUE, FALSE))


View(weed)



write_json(weed, "weedEdit.json")

?write_js