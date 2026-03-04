import MenuCard from './MenuCard';

export default function MenuSection({ title, items }) {
    if (!items || items.length === 0) return null;

    return (
        <section className="mb-32 px-6 max-w-[1600px] mx-auto font-outfit">
            <div className="flex flex-col items-center mb-16 px-4">
                <div className="flex items-center gap-6 mb-4">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold italic text-white tracking-tight">
                        {title}
                    </h2>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
                </div>
                <div className="h-1 w-20 bg-gold/10 rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
                {items.map((item) => (
                    <div key={item.id} className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <MenuCard item={item} />
                    </div>
                ))}
            </div>
        </section>
    );
}
