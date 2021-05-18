import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarTipoInvestimento1620868210676 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'tipo_investimento',
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
              name: 'descricao',
              type: 'varchar',
              isNullable: true,
            }
          ],
        }),
  
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('tipo_investimento');
    }

}