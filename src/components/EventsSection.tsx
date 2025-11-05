// Fix: Use relative paths instead of aliases to resolve module errors.
import { EVENTS_DATA } from '../constants/index';
import { Event } from '../types/index';

const EventCard = ({ event }: { event: Event }) => {
    const getEventStatus = (eventDate: string) => {
        const now = new Date();
        const date = new Date(eventDate);
        now.setHours(0,0,0,0);
        date.setHours(0,0,0,0);

        if (date.getTime() < now.getTime()) return 'past';
        if (date.getTime() === now.getTime()) return 'today';
        return 'future';
    };

    const status = getEventStatus(event.date);
    const isHighlighted = status === 'today';

    const cardClasses = `
        bg-white p-6 rounded-lg shadow-md flex flex-col h-full
        ${isHighlighted ? 'border-2 border-primary ring-4 ring-primary/20' : ''}
        ${status === 'past' ? 'opacity-60' : ''}
        transition-all duration-300
    `;

    return (
        <div className={cardClasses}>
            {isHighlighted && (
                <span className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">HOJE</span>
            )}
             <div className="relative">
                <h3 className="text-xl font-bold text-text-primary mb-2">{event.title}</h3>
                <p className="font-semibold text-secondary mb-1">
                    {new Date(event.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </p>
                <p className="text-gray-500 mb-4">{event.time}</p>
                <p className="text-text-secondary">{event.location}</p>
             </div>
        </div>
    );
}

export const EventsSection = () => {
    const sortedEvents = [...EVENTS_DATA].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return (
    <section id="events" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">Eventos</h2>
          <p className="mt-4 text-lg text-text-secondary">Fique por dentro dos próximos eventos:</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedEvents.map((event, index) => (
             <div key={index} className="relative">
                 <EventCard event={event} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};