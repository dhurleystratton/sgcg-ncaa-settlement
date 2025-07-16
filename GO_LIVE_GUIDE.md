# NCAA Settlement Site - Go Live Guide

## Current Status (January 16, 2025)
- ✅ **Preview Site Live**: https://sgcg-ncaa-settlement.netlify.app
- ✅ **All Content Updated**: Compliance-approved copy implemented
- ✅ **Mobile Optimized**: Fully responsive design
- ✅ **SEO Ready**: Meta tags, sitemap, robots.txt configured
- ⏳ **Awaiting**: Team approval to go live

## Quick Links
- **Preview Site**: https://sgcg-ncaa-settlement.netlify.app
- **GitHub Repo**: https://github.com/dhurleystratton/sgcg-ncaa-settlement
- **Netlify Dashboard**: https://app.netlify.com

## Step 1: Set Up Email Service (30 minutes)

### Recommended: Resend (Easiest)
1. Go to [resend.com](https://resend.com) and sign up
2. Get your API key from dashboard
3. In your project, run:
   ```bash
   npm install resend
   ```
4. Update `/app/api/contact/route.ts` with this code:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   // Replace the TODO section with:
   const { data, error } = await resend.emails.send({
     from: 'NCAA Settlement <noreply@ncaa-settlement.com>',
     to: EMAIL_RECIPIENTS,
     subject: emailSubject,
     html: emailBody,
   });
   ```
5. Add to Netlify environment variables:
   - Key: `RESEND_API_KEY`
   - Value: Your Resend API key

## Step 2: Domain Migration (45 minutes)

### Part A: Remove Squarespace Redirects
1. Log into Squarespace account
2. Go to **Settings** → **Domains**
3. Find and remove redirects for:
   - ncaa-settlement.com
   - nil-settlement.com
4. **IMPORTANT**: Take screenshots of current DNS settings

### Part B: Connect to Netlify
1. In Netlify dashboard, go to **Domain settings**
2. Click **Add domain alias**
3. Add `ncaa-settlement.com`
4. Add `nil-settlement.com`
5. Netlify will provide DNS instructions

### Part C: Update DNS
1. Log into your domain registrar (where domains were purchased)
2. Update nameservers to Netlify's:
   - dns1.p04.nsone.net
   - dns2.p04.nsone.net
   - dns3.p04.nsone.net
   - dns4.p04.nsone.net
3. Wait 10-30 minutes for SSL certificates

## Step 3: Final Checks (15 minutes)

### Before Going Live:
- [ ] Test form with real email - confirm delivery to all 3 recipients
- [ ] Check both domains load correctly
- [ ] Verify SSL padlock appears
- [ ] Test on mobile device
- [ ] Click all links to verify they work

### After Going Live:
- [ ] Monitor first few form submissions
- [ ] Check Google Search Console after 24 hours
- [ ] Set up Netlify Analytics
- [ ] Create backups of Squarespace content

## Troubleshooting

### Emails not sending?
- Check Netlify environment variables
- Verify Resend API key is correct
- Check Netlify function logs

### Domain not working?
- DNS can take up to 48 hours (usually 10-30 min)
- Clear browser cache
- Try incognito/private browser mode

### SSL certificate error?
- Wait 30 minutes for auto-provisioning
- In Netlify, click "Renew certificate"

## Emergency Rollback
If needed, you can quickly revert:
1. Re-enable Squarespace redirects
2. Change DNS back to original settings
3. Site remains on preview URL

## Support Contacts
- **Netlify Support**: support.netlify.com
- **Domain/DNS Help**: Your registrar's support
- **Technical Issues**: Update CLAUDE.md and start new session

---

**Remember**: The preview site (https://sgcg-ncaa-settlement.netlify.app) will continue working even after custom domains are connected. Use it as your staging environment for future updates.