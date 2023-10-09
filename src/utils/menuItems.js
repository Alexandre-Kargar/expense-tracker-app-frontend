import { dashboard, expenses, transactions, trend } from "./icons";

export const menuItems = [{
    id: 1,
    title: 'Tableau de bord',
    icon: dashboard,
    link: '/dashboard'
},
{
    id: 2,
    title: 'Voir les Transactions',
    icon: transactions,
    link: '/dashboard'
},
{
    id: 3,
    title: 'Revenus',
    icon: trend,
    link: '/dashboard'
},
{
    id: 4,
    title: 'Dépenses',
    icon: expenses,
    link: '/dashboard'
}
]