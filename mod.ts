import { dateToFormat } from './dateToFormat.ts';

export * from './dateToFormat.ts';
export * from './dateToIS08601WithTimeZoneOffset.ts';

if (import.meta.main)
{
  console.log(dateToFormat('YYYY-MM-DD HH:mm:ss'));
}
