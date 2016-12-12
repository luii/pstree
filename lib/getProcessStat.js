var readFile = require('fs').readFile

var sscanf = require('scanf').sscanf


const format = '%d (%s) %c %d %d %d %d %d %u %lu %lu %lu %lu %lu %lu %ld %ld '+
               '%ld %ld %ld %ld %llu %lu %ld %lu %lu %lu %lu %lu %lu %lu %lu '+
               '%lu %lu %lu %lu %lu %d %d %u %u %llu %lu %ld %lu %lu %lu %lu '+
               '%lu %lu %lu %d'


function getProcessStat(pid, callback)
{
 readFile('/proc/'+pid+'/stat', 'utf8', function(error, data)
 {
   if(error) return callback(error)

   var result = sscanf(data, format,
       'pid', 'comm', 'state', 'ppid', 'pgrp', 'session', 'tty_nr', 'tpgid',
       'flags', 'minflt', 'cminflt', 'majflt', 'cmajflt', 'utime', 'stime',
       'cutime', 'cstime', 'priority', 'nice', 'num_threads', 'itrealvalue',
       'starttime', 'vsize', 'rss', 'rsslim', 'startcode', 'endcode',
       'startstack', 'kstkesp', 'kstkeip', 'signal', 'blocked', 'sigignore',
       'sigcatch', 'wchan', 'nswap', 'cnswap', 'exit_signal', 'processor',
       'rt_priority', 'policy', 'delayacct_blkio_ticks', 'guest_time',
       'cguest_time', 'start_data', 'end_data', 'start_brk', 'arg_start',
       'arg_end', 'env_start', 'env_end', 'exit_code')

   callback(null, result)
 })
}


module.exports = getProcessStat