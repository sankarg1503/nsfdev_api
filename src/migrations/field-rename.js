module.exports = {
  async up(strapi) {
    // Contact collection
    const contacts = await strapi.db.query('api::contact.contact').findMany();
    for (const contact of contacts) {
      await strapi.db.query('api::contact.contact').update({
        where: { id: contact.id },
        data: {
          name: contact.ContactName,
          email: contact.ContactEmail,
          feedback: contact.ContactFeedback,
          // Clear old fields
          ContactName: null,
          ContactEmail: null,
          ContactFeedback: null
        }
      });
    }

    // Health Tips collection
    const healthTips = await strapi.db.query('api::healthtip.healthtip').findMany();
    for (const tip of healthTips) {
      await strapi.db.query('api::healthtip.healthtip').update({
        where: { id: tip.id },
        data: {
          title: tip.HealthTipsTitle,
          subtitle: tip.HealthTipsSubTitle,
          webImage: tip.HealthTipsWebImage,
          mobileImage: tip.HealthTipsMobileImage,
          description: tip.HealthTipsDescription,
          // Clear old fields
          HealthTipsTitle: null,
          HealthTipsSubTitle: null,
          HealthTipsWebImage: null,
          HealthTipsMobileImage: null,
          HealthTipsDescription: null
        }
      });
    }

    // Healthy Relationship collection
    const healthyRelationship = await strapi.db.query('api::healthy-relationship.healthy-relationship').findOne();
    if (healthyRelationship) {
      await strapi.db.query('api::healthy-relationship.healthy-relationship').update({
        where: { id: healthyRelationship.id },
        data: {
          title: healthyRelationship.Title,
          highlightedTitle: healthyRelationship.TitleHighlight,
          webImage: healthyRelationship.ImageWeb,
          mobileImage: healthyRelationship.ImageMobile,
          // Clear old fields
          Title: null,
          TitleHighlight: null,
          ImageWeb: null,
          ImageMobile: null
        }
      });
    }

    // Peace at Home collection
    const peaceAtHome = await strapi.db.query('api::peaceathome.peaceathome').findOne();
    if (peaceAtHome) {
      await strapi.db.query('api::peaceathome.peaceathome').update({
        where: { id: peaceAtHome.id },
        data: {
          title: peaceAtHome.Title,
          webImage: peaceAtHome.PeaceathomeWebImage,
          mobileImage: peaceAtHome.PeaceathomeMobileImage,
          // Clear old fields
          Title: null,
          PeaceathomeWebImage: null,
          PeaceathomeMobileImage: null
        }
      });
    }

    // Menu Controls collection
    const menuControls = await strapi.db.query('api::menucontrol.menucontrol').findMany();
    for (const menu of menuControls) {
      await strapi.db.query('api::menucontrol.menucontrol').update({
        where: { id: menu.id },
        data: {
          title: menu.Title,
          icon: menu.Icon,
          link: menu.Link || '',
          // Clear old fields
          Title: null,
          Icon: null,
          Link: null
        }
      });
    }

    // Update menu relationships after all basic fields are updated
    for (const menu of menuControls) {
      if (menu.Parent) {
        await strapi.db.query('api::menucontrol.menucontrol').update({
          where: { id: menu.id },
          data: {
            parentMenu: menu.Parent,
            Parent: null
          }
        });
      }
    }
  },

  async down(strapi) {
    // If needed, implement the reverse migration here
    console.log('Down migration not implemented');
  }
};
