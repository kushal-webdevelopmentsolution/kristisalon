package com.demo.service.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.demo.service.dto.menuDTO;

@Repository
public class menuRepository
{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Transactional(readOnly=true)
    public List<menuDTO> findAll() {
        return jdbcTemplate.query("select * from menu", 
                new MenuRowMapper());
    }

    @Transactional(readOnly=true)
    public menuDTO findMenuById(int id) {
        return jdbcTemplate.queryForObject(
            "select * from menu where id=?",
            new Object[]{id}, new MenuRowMapper());
    }

    public menuDTO create(final menuDTO menu) 
    {
        final String sql = "insert into menu(name,url,active) values(?,?)";

        KeyHolder holder = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, menu.getName());
                ps.setString(2, menu.getUrl());
                ps.setBoolean(3, menu.getActive());
                return ps;
            }
        }, holder);

        int newUserId = holder.getKey().intValue();
        menu.setId(newUserId);
        return menu;
    }
}

class MenuRowMapper implements RowMapper<menuDTO>
{
    public menuDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
        menuDTO menu = new menuDTO();
        menu.setId(rs.getInt("id"));
        menu.setName(rs.getString("name"));
        menu.setUrl(rs.getString("url"));
        menu.setActive(rs.getBoolean("active"));
        return menu;
    }
}
