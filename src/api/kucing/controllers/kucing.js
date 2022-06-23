'use strict';

/**
 *  kucing controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

 module.exports = createCoreController('api::kucing.kucing', ({ strapi }) =>  ({
  
    async findKucing(ctx) {
      
      const user = ctx.state.user;
      if(!user){
        return ctx.badRequest(null, [{message: [{id: "belum login"}]}])
      }
      const {id} = ctx.request.params;
      const kucing = await strapi.entityService.findMany(
        'api::kucing.kucing',
        {
            sort: {id: 'DESC'},
            limit:2,
            fields:['jenis', 'deskripsi', 'negara_asal']
        }
      );
      const sanitizedEntity = await this.sanitizeOutput(kucing, ctx);
  
      return this.transformResponse(sanitizedEntity);
    },

    async createKucing(ctx){
      const user = ctx.state.user;
      if(!user){
        return ctx.badRequest(null, [{message: [{id: "belum login"}]}])
      }
      const {jenis, deskripsi, negara_asal, gambar} = ctx.request.body;
      const kucing = await strapi.entityService.create('api::kucing.kucing',{
          data:{
              jenis,
              deskripsi,
              negara_asal,
              gambar,
          },
          populate:["gambar"],
        }
      );
      const sanitizedEntity = await this.sanitizeOutput(kucing, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    async updateKucing(ctx){
      const user = ctx.state.user;
      if(!user){
        return ctx.badRequest(null, [{message: [{id: "belum login"}]}])
      }
      const {jenis, deskripsi, negara_asal, gambar} = ctx.request.body;
      const {id} = ctx.request.params;
      const kucing = await strapi.entityService.update('api::kucing.kucing',id,{
        data:{
          jenis,
          deskripsi,
          negara_asal,
          gambar,
        }
      }
      );
      const sanitizedEntity = await this.sanitizeOutput(kucing, ctx);
      return this.transformResponse(sanitizedEntity);
    },
    async deleteKucing(ctx){
      const user = ctx.state.user;
      if(!user){
        return ctx.badRequest(null, [{message: [{id: "belum login"}]}])
      }
      const {id} = ctx.request.params;
      const kucing = await strapi.entityService.delete('api::kucing.kucing',id)
      return "data berhasil dihapus"
    }
  
  }));
  
   
  
   