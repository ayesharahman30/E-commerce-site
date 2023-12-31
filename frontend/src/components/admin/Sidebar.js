import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</Link>
                    </li>

                    <li>
                        <Link to="/admin/products"><i className="fa fa-clipboard"></i>Products</Link>
                    </li>

                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                    </li>
                    {/* <li>
                        <Link to="/admin/transactions"><i className="fa fa-star"></i>Transactions</Link>
                    </li> */}

                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Reviews</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
