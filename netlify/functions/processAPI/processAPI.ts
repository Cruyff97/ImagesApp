import { schedule } from '@netlify/functions';

// To learn about scheduled functions and supported cron extensions, 
// see: https://ntl.fyi/sched-func

export function processEnv() {
    return process.env['API_KEY_CT']
}

