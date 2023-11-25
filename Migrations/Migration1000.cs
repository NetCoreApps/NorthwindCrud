using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;

namespace NorthwindCrud.Migrations;

public class Migration1000 : MigrationBase
{
    public class MyTable
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public override void Up()
    {
        Db.CreateTable<MyTable>();
    }

    public override void Down()
    {
        Db.DropTable<MyTable>();
    }
}
