import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CriarInvestimento1620868198766 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'investimento',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'nome',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'tipo_investimento_id',
              type: 'int',
              isNullable: true,
            },
            {
              name: 'valor',
              type: 'float',
              isNullable: false,
            }
          ],
        }),  
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('investimento');
    }

}

