/**
 * contact controller
 */

import { factories } from '@strapi/strapi'
import CryptoJS from 'crypto-js';

export default factories.createCoreController('api::contact.contact', ({ strapi }) => ({
    async create(ctx) {
      try {
        const secretKey = '0244387ac5f95d2f5ae4b5e560e4c617f4b59857378d6579041229fdbb44dee9'; // Same key used in Angular
        const encryptedData = ctx.request.body.data;
  
        // Decrypt the data
        const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  
        // Save decrypted data to Strapi
        ctx.request.body.data = decryptedData;
        const response = await super.create(ctx);
        
        return response;
      } catch (error) {
        console.error('Decryption error:', error);
        return ctx.badRequest('Invalid encrypted data');
      }
    }
  }));
