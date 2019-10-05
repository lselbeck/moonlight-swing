import React, { Component } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ButtonLink from '../../components/ButtonLink';
import MapContainer from './components/MapContainer/MapContainer';
import { eventData } from './event-data.json';

import './tabs.css';

const dateStringOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function getTimespanString(event: Event) {
  if (!event || !event.start || !event.end) {
    return '';
  }

  return (
    event.start
      .toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      .replace(/\s/g, '') +
    ' - ' +
    event.end
      .toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      .replace(/\s/g, '')
  ).toLowerCase();
}

const FeateredEvent = props => (
  <div className={props.className}>
    <p className="text-uppercase">
      <strong>See us perform at</strong>
    </p>
    <h1 className="mt-5 featured-name">{props.event.name ? `"${props.event.name}"` : ''}</h1>
    {!!props.event.name ? <div>{props.event.venue}</div> : <h1>{props.event.venue}</h1>}
    <div>{props.event.start && props.event.start.toLocaleString('en-us', dateStringOptions)}</div>
    <div>
      <span className="event-time">{getTimespanString(props.event)}</span>
      <span className="event-address ml-3 pl-3">{props.event.address}</span>
    </div>
  </div>
);

const Calendar = (props: { className: string; events: CalendarEvents }) => {
  function suffixOf(i: number) {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
      return 'st';
    }
    if (j === 2 && k !== 12) {
      return 'nd';
    }
    if (j === 3 && k !== 13) {
      return 'rd';
    }
    return 'th';
  }

  return (
    <div className={props.className}>
      <p className="text-uppercase">
        <strong>Calendar</strong>
      </p>
      <Tabs>
        <TabList>
          {Object.keys(props.events).map((year, yearIndex) => (
            <Tab className="year-tabs" key={yearIndex}>
              {year}
            </Tab>
          ))}
        </TabList>

        {Object.keys(props.events).map((year, yearIndex) => (
          <TabPanel key={yearIndex}>
            <Tabs>
              <TabList>
                {Object.keys(props.events[year]).map((month, monthIndex) => (
                  <Tab className="month-tabs" key={monthIndex}>
                    {new Date(2018, parseInt(month, 10), 1, 0, 0, 0).toLocaleString('en-us', {
                      month: 'long',
                    })}
                  </Tab>
                ))}
              </TabList>

              {Object.keys(props.events[year]).map((month, monthIndex) => (
                <TabPanel className="container-fluid pl-2" key={monthIndex}>
                  {props.events[year][month].map((event: Event, eventIndex: number) => (
                    <div className="row" key={eventIndex}>
                      <div className="col-3 col-sm-2 col-xl-1">
                        <span className="month-date">{event.start.getDate()}</span>
                        {suffixOf(event.start.getDate())}
                      </div>
                      <div className="col-9 col-sm-10 col-xl-11 event-info">
                        <span>
                          {event.name && event.name.length !== 0 ? event.name + ' at ' : ''}
                          {event.venue}
                        </span>
                        <p>
                          <span className="event-time">{getTimespanString(event)}</span>
                          <span className="event-address ml-3 pl-3">{event.address}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </Tabs>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

interface Event {
  start: Date;
  end: Date;
  venue: string;
  name: string;
  address: string;
}

interface CalendarEvents {
  [k: number]: { [k: number]: Event };
}

interface Coords {
  lat: number;
  lng: number;
}

interface IState {
  events: Event[];
  center?: Coords;
}

export default class Events extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      events: eventData.map(event => {
        return {
          venue: event.venue,
          name: event.name,
          address: event.address,
          start: new Date(event.start),
          end: new Date(event.end),
        };
      }),
      center: undefined,
    };
  }

  getEventsToDisplay() {
    return this.state.events
      .filter(e => e.start > new Date())
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  }

  async getLatAndLong(address: string): Promise<undefined | Coords> {
    try {
      const response = await fetch(`/api/coords?address=${address}`, { method: 'GET' });
      return (await response.json()).coords;
    } catch (e) {
      // console.error(e);
    }
  }

  async componentDidMount() {
    const events = this.getEventsToDisplay();
    if (events.length > 0) {
      const firstEvent = events[0];
      const coords = await this.getLatAndLong(firstEvent.address);
      this.setState({
        center: coords,
      });
    }
  }

  getCalendarFormatEvents(events: Event[]): CalendarEvents {
    const mappableEvents = {};
    for (let i = 0; i < events.length; i++) {
      const e = this.state.events[i];
      const year = e.start.getFullYear();
      const month = e.start.getMonth();

      if (mappableEvents[year] === undefined) {
        mappableEvents[year] = [];
      }

      if (mappableEvents[year][month] === undefined) {
        mappableEvents[year][month] = [];
      }

      mappableEvents[year][month].push(e);
    }

    return mappableEvents;
  }

  renderNoEvents() {
    return (
      <section id="events">
        <div className="container" id="events-container">
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <h1 className="vocalists-title">Upcoming Events</h1>
            </div>
            <div className="col-12">
              <h1>Stay tuned for more upcoming events</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center">
              <ButtonLink className="intro-button event-button" to="contact">
                Book us for your event!
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    const events = this.getEventsToDisplay();

    const firstEvent = events[0];

    if (!firstEvent) {
      return this.renderNoEvents();
    }

    const calendarFormatEvents = this.getCalendarFormatEvents(events);

    return (
      <section id="events">
        <div className="container" id="events-container">
          <div className="row mb-5 no-gutters">
            <div className="col-12 mb-4">
              <h1 className="vocalists-title">Upcoming Events</h1>
            </div>
            <FeateredEvent className="col-12 col-md-6" event={firstEvent} />
            <div className="col-12 col-md-6">
              {this.state.center && <MapContainer center={this.state.center} />}
            </div>
          </div>
          <div className="row mt-5">
            <Calendar className="col-12" events={calendarFormatEvents} />
          </div>
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center">
              <ButtonLink className="intro-button event-button" to="contact">
                Book us for your event!
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
