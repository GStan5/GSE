# AI Chatbot Setup Guide

## Overview

Your chatbot now uses a hybrid approach:

- **AI-powered responses** when OpenAI API key is provided
- **Rule-based fallback** when no API key is set or AI fails
- **Conversation memory** - AI remembers context throughout the chat
- **Cost-effective** - Uses GPT-4o-mini model (~$0.15 per million tokens)

## Setup Instructions

### 1. Get OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Create an account or log in
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)

### 2. Add API Key to Environment

1. Copy `.env.local.example` to `.env.local`
2. Replace `your-openai-api-key-here` with your actual API key:

   ```
   # OpenAI Configuration (SERVER-SIDE ONLY)
   OPENAI_API_KEY=sk-your-actual-key-here

   # Admin Dashboard Password (SERVER-SIDE ONLY)
   ADMIN_PASSWORD=gse2025
   ```

### 3. Test the Chatbot

1. Start the development server: `npm run dev`
2. Open your website and click the chatbot button
3. Try asking complex questions like:
   - "I need help with local SEO for my restaurant"
   - "How much would it cost to build a booking system?"
   - "What's the difference between your website and SEO services?"

## Features

### AI-Powered Responses

- Understands context and nuance
- Remembers conversation history
- Provides personalized recommendations
- Handles unexpected questions gracefully

### Business Context

The AI knows about:

- All your services and pricing
- Timeline estimates
- Hosting requirements
- Contact information
- Your business personality

### Fallback System

- Falls back to rule-based responses if AI fails
- Always provides helpful contact information
- Maintains functionality even without API key

### Cost Estimation

- **GPT-4o-mini**: ~$0.15 per million tokens
- **Average conversation**: 500-1000 tokens
- **Monthly cost**: $5-20 for typical usage (100-500 conversations)

## Customization

### Business Information

Edit `src/utils/aiChatbot.ts` to update:

- Business details
- Service descriptions
- Pricing information
- Response personality

### Response Length

Adjust `max_tokens` in `getAIResponse()` function:

- 300 tokens = ~225 words (current)
- 500 tokens = ~375 words (longer responses)
- 150 tokens = ~110 words (shorter responses)

### AI Model

Change the model in `aiChatbot.ts`:

- `gpt-4o-mini` - Cost effective, good quality
- `gpt-4o` - Higher quality, more expensive
- `gpt-3.5-turbo` - Fastest, cheapest, lower quality

## Monitoring & Analytics

### Usage Tracking

Monitor your OpenAI usage at:
https://platform.openai.com/usage

### Set Usage Limits

Set monthly spending limits to control costs:
https://platform.openai.com/account/limits

### Error Handling

Check browser console for errors:

- API key issues
- Network problems
- Rate limiting

## Security Notes

### API Key Security

- Never commit `.env.local` to version control
- Use environment variables in production
- Consider server-side API calls for enhanced security

### Rate Limiting

- OpenAI has rate limits per minute/hour
- Current setup handles this gracefully
- Consider adding request queuing for high traffic

## Troubleshooting

### Common Issues

1. **"AI failed, falling back"** - Check API key and internet connection
2. **No responses** - Verify API key format and validity
3. **Slow responses** - Normal, AI processing takes 1-3 seconds
4. **High costs** - Check conversation length and frequency

### Debug Mode

Add to your `.env.local`:

```
NEXT_PUBLIC_DEBUG_CHATBOT=true
```

This will log detailed information to the browser console.

## Next Steps

### Optional Enhancements

1. **Server-side API** - Move OpenAI calls to API routes for better security
2. **Conversation persistence** - Save chats to database
3. **Analytics integration** - Track popular questions and responses
4. **A/B testing** - Test different prompts and models
5. **Voice integration** - Add speech-to-text capabilities

### Advanced Features

1. **Lead qualification** - Automatically score and route leads
2. **Appointment booking** - Direct integration with calendar
3. **File uploads** - Let users share documents for analysis
4. **Multi-language** - Support for different languages
