# Grafana vertical table plugin

This plugin is dirty and hackish. I know nothing about JS, TS, React and all this hipster stuff,
prefering the old good C and Python. Just fiddle with some code until it kind of works.

Build-in grafana table is tailored to displaying time frames as rows.
Each column contains same metric of same type.
A lot of metrics means a lot of columns.

There is a need to display a table for the single time frame partitioned by
entity number (think sensor number). Each row contains metric of same type.
A lot of metrics means a lot of rows.
That's the plugin idea.

stock table:

![example](https://github.com/jkmnt/grafana_vtable/blob/16686ebce7037a3cac796a199e19e9cac2c5a8be/stock_table.png)


vtable:

![example](https://github.com/jkmnt/grafana_vtable/blob/16686ebce7037a3cac796a199e19e9cac2c5a8be/vtable.png)

Feel free to hack/fork it.

Maybe the Grafana guys would stop coding all this shiny new stuff
and make the base platform much more powerful and robust.
... No, it's boring, I know. The JS mindset tells us to go for the new and shiny.
