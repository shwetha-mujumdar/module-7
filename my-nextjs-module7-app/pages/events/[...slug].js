import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";

function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();
  const filterData = router.query.slug;

  const { data, error } = useSWR(
    "https://nextjs-course-c81cc-default-rtdb.firebaseio.com/events.json"
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  let PageHeader = (
    <Head>
      <title>Flitered Events</title>
      <meta name="description" content={`All Events are Flitered `} />
    </Head>
  );

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  PageHeader = (
    <Head>
      <title>Flitered Events</title>
      <meta
        name="description"
        content={`All Events for ${numMonth}/${numYear}`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        {PageHeader}
        <p>Invalidfilter</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <Fragment>
        {PageHeader}
        <p>No Events Found</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      {/* ----- Static head content ------
      <Head>
        <title>Flitered Events</title>
         <meta
           name="description" 
           content = "There are several  Flitered Event lists"
        />
      </Head> */}

      {/* -------Dynamic Head content ---- */}
      {PageHeader}
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
