import { DataSource } from "../types/stack";

export default [{
    key: DataSource.AIRTABLE.toLowerCase(),
    url: "/data-sources/airtable",
},{
    key: DataSource.MONGODB.toLowerCase(),
    url: "/data-sources/mongodb",
},{
    key: DataSource.MSSQL.toLowerCase(),
    url: "/data-sources/mssql",
},{
    key: DataSource.MYSQL.toLowerCase(),
    url: "/data-sources/mysql",
},{
    key: DataSource.POSTGRES.toLowerCase(),
    url: "/data-sources/postgres",
}]
