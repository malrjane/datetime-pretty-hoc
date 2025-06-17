import moment from "moment";
import React from "react";

function DateTimePretty (Component) {

    function pluralize(value, unit) {
  return `${value} ${unit}${value === 1 ? '' : 's'} ago`;
}

   return function(props) { 
         const publishedDate = moment(props.date);
         const now = moment();
    const duration = moment.duration(now.diff(publishedDate)) ;
    let prettyDate;


 

if (duration.asYears() >=  1) {
        const years = Math.floor(duration.asYears());
        prettyDate = pluralize(years, 'year');
      }

         else if (duration.asDays() >=  1) {
        const days = Math.floor(duration.asDays());
        prettyDate = pluralize(days, 'day');
      } else if (duration.asHours() >= 1) {
         const hours = Math.floor(duration.asHours());
         prettyDate = pluralize(hours, 'hour')
      }  
        else {
          const minutes = Math.floor(duration.asMinutes()) ;
         prettyDate = pluralize(minutes, 'minute')
        }
          
       


     return <Component {...props} date={prettyDate} />;
}
   }


export default DateTimePretty;