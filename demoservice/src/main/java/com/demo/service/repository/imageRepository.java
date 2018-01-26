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

import com.demo.service.dto.imageDTO;

@Repository
public class imageRepository
{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Transactional(readOnly=true)
    public List<imageDTO> findAll() {
        return jdbcTemplate.query("select id, name, imgurl, img_group, img_order, active from images", 
                new ImageRowMapper());
    }

    @Transactional(readOnly=true)
    public imageDTO findImageById(int id) {
        return jdbcTemplate.queryForObject(
            "select id, name, imgurl, img_group, img_order, active from images where id=?",
            new Object[]{id}, new ImageRowMapper());
    }
    
    @Transactional(readOnly=true)
    public List<imageDTO> findImageByGroupName(String groupName) {
        return  jdbcTemplate.query(
            "select id, name, imgurl, img_group, img_order, active from images where img_group=?",
            new Object[]{groupName}, new ImageRowMapper());
    }

    public imageDTO create(final imageDTO image) 
    {
    	
        final String sql = "insert into images(id, name, imgurl, img_group, img_order, active) values(nextval('image_seq'),?,?,?,?,?)";

        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
            	
                PreparedStatement ps = connection.prepareStatement(sql);
                ps.setString(1, image.getName());
                ps.setString(2, image.getImgurl());
                ps.setString(3, image.getImgGroup());
                ps.setInt(4, image.getImgOrder());
                ps.setBoolean(5, image.getActive());
                return ps;
            }
        });
        System.out.println(image.toString());
        return image;
    }
}

class ImageRowMapper implements RowMapper<imageDTO>
{
    public imageDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
        imageDTO image = new imageDTO();
        image.setId(rs.getInt("id"));
        image.setName(rs.getString("name"));
        image.setImgurl(rs.getString("imgurl"));
        image.setImgGroup(rs.getString("img_group"));
        image.setImgOrder(rs.getInt("img_order"));
        image.setActive(rs.getBoolean("active"));
        return image;
    }
}
